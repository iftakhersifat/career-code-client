import React, { use } from 'react';
import { AuthContext } from './AuthProvider';

const useAuth = () => {
    const useInfo =use(AuthContext)
    return useInfo;
};

export default useAuth;