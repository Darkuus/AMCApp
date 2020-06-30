import React, { createContext, useState, useEffect, useContext } from 'react';
import * as auth from '../Services/auth';
import api from '../Services/api';
import { setgroups } from 'process';

interface User {
    username: string;
    name: string;
    email:string;
    profilePic: string;
    wishList: object[];
}

interface AuthContextData {
    signed: boolean;
    user: User | null;
    groups: Group[] | null;
    loading: boolean;
    signIn(username: string, password:string): Promise<void>;
    signOut(): void;
}

interface Group {
    _id: string,
    administrator: Administrator,
    title: string,
    revealDate: Date,
    minValue: Number,
    maxValue: Number,
    revealPlaceLatitude: Number,
    revealPlaceLongetude: Number,
    members: [User]
}

interface Administrator{
    username: string,
    name: string,
    email: string
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    
    const [user, setUser] = useState<User | null>(null);
    const [groups, setGroups] = useState<Group[] | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function loadStorageData(){

            const storagedUser  =  localStorage.getItem('user');
            const storagedToken =  localStorage.getItem('token');
            const storagedGroups =  localStorage.getItem('groups');
            
            if(storagedUser && storagedToken){
                api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;
        
                setUser(JSON.parse(storagedUser));
                setGroups(JSON.parse(storagedGroups || '' ));
                setLoading(false);
            }
        }

        loadStorageData(); 
    },[]);

    async function signIn(username:string, password:string) {

        const responseUser = await auth.signIn(username, password); 
        const {token, user } = responseUser;
        api.defaults.headers['Authorization'] = `Bearer ${token}`;
        
        setUser(user);
        
        const responseGroupsUser = await api.get<Group[]>(`/group/getAllByUsername/${responseUser.user.username}`);
        console.log('local: ',responseGroupsUser.data);
        setGroups(responseGroupsUser.data);
        console.log(groups);

        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('groups', JSON.stringify(responseGroupsUser.data));
        localStorage.setItem('token', token);
        
    }  
    
    async function signOut() {
        localStorage.clear();
        setUser(null);
        setGroups(null);
    } 
    return (
        <AuthContext.Provider value={{signed: !!user, user, groups, loading, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);
    
    return context;
}