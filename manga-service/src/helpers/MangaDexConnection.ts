import Mangadex from 'mangadex-api';
import logger   from '../logger';

const PATH_TO_SESSION = './src/session/MANGA_DEX_SESSION.txt';

const client = new Mangadex({
    apiHost: process.env.MANGA_DEX_API_HOST,
    host:    process.env.MANGA_DEX_HOST,
});

const isSessionExpired = () => {
    return client.agent.checkLogin();
};

export const getSession = () => {
    if (isSessionExpired()) {
        return client;
    }
    else {
        return initSession();
    }
};

export const initSession = async () => {
    let session : boolean; 
    
    try {
        session = await client.agent.login(
            process.env.MANGA_DEX_USERNAME, 
            process.env.MANGA_DEX_PASSWORD, 
            false
        );
    }
    catch(e) {
        logger.error('Failed to Log into MangaDex.', e);
        throw new Error(e);
    }
    
    if (session === false) {
        logger.error('No session found for MangaDex.');
        throw new Error('No session found for MangaDex.');
    }
    
    const me = await client.getMe();
            
    logger.info('Logged into MangaDex as ' + me.username);

    await client.agent.saveSession(PATH_TO_SESSION);
    
    logger.info('Storing MangaDex user session.');
        
    return client;
};
