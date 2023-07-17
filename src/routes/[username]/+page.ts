
import type { PageLoad } from './$types';

export const load = (({ params }) => {
    if (params.username === 'shubham') {
        return {
            username: 'shubham',
            apps: 26,
        };
    }else{
        return{
            username: params.username,
            apps: -1
        }
    }
}) satisfies PageLoad;