import {
    BAD_REQUEST,
    INTERNAL_SERVER_ERROR,
    UNPROCESSABLE_ENTITY,
} from                          'http-status-codes';
import { Response } from        'express';

// ErrorResponse is an Error class for use
// as part of an http response.
export class ErrorResponse extends Error {
    public code: number;
    public message: string;
    public name: string;

    constructor (message: string = '', name: string = 'Error', code: number = INTERNAL_SERVER_ERROR, error?: Error) {
        super();
        this.code = code;
        this.message = message;
        this.name = name;
        if (error) {
            // Pulling everything over from the error via assign ensures nothing is lost
            // in the conversion to the ErrorResponse class.
            Object.assign(this, error);
        }
    }
}

export function createErrorResponse(error: Error, response: Response, message: string = '') {
    const errorResponse = standardizeError(error);
    if ( message ) {
        errorResponse.message = message;
    }

    return response.status(errorResponse.code).json({
        errors: [
            errorResponse,
        ],
    });

}

export function standardizeError(error: Error): ErrorResponse {
    const errorResponse = new ErrorResponse(undefined, undefined, undefined, error);
    switch (error.name) {
    case 'SequelizeUniqueConstraintError':
        errorResponse.code = BAD_REQUEST;
        break;
    case 'SequelizeValidationError':
        errorResponse.code = UNPROCESSABLE_ENTITY;
        break;
    }
    return errorResponse;
}
