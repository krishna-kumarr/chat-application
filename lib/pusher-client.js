'use client';
import Pusher from 'pusher-js';

export function getPusherClient() {
    return new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY, {
        cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
        forceTLS: true,
        authEndpoint: '/api/pusher/auth',
        auth: {
            withCredentials: true,
        },
    });
}
