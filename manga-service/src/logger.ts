import winston        from 'winston';
import expressWinston from 'express-winston';

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.align(),
        winston.format.printf(
            info => `${info.timestamp} ${info.level}: ${info.message}`
        )
    ),
    transports: [
        new winston.transports.Console(),
        // new winston.transports.File({ filename: 'combined.log' }),
    ],
});




export const requestLogger = expressWinston.logger({
    
    // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
    colorize: true,
    
    
    // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
    expressFormat: true,
    
    
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.align(),
        winston.format.printf(
            info => `${info.timestamp} ${info.level}: ${info.message}`
        )
    ), 
    
    
    // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
    ignoreRoute: function () { return false; }, 
    
    
    
    meta: false, 
    
    
    // optional: control whether you want to log the meta data about the request (default to true)
    msg: 'HTTP {{req.method}} {{req.url}}', 
    
    transports: [
        new winston.transports.Console(),
    ], 
});

export const errorLogger = expressWinston.errorLogger({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.align(),
        winston.format.printf(
            info => `${info.timestamp} ${info.level}: ${info.message}`
        )
    ),
    meta:       false,
    // optional: control whether you want to log the meta data about the request (default to true)
    msg:        'HTTP {{req.method}} {{req.url}}', 
    transports: [
        new winston.transports.Console(),
    ], // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
});

export default logger;
