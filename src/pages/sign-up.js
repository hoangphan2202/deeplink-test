import React, { useEffect } from 'react';

const SignUp = () => {
    useEffect(() => {
        const isDesktop = window.innerWidth > 1024;
        if (isDesktop) {
            window.location.href = 'https://play.google.com/store/apps/details?id=app.pibase.co';
        }
    }, []);

    return (
        <div className="min-h-screen w-full flex items-center justify-center">
            <div className="text-center">
                <p className="text-2xl font-bold">Pibase</p>
                <div className="flex gap-2 mt-3">
                    <img src="/google-play.png" alt=""/>
                    <button onClick={()=> window.open('https://play.google.com/store/apps/details?id=app.pibase.co','_blank')}>Open Google play</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
