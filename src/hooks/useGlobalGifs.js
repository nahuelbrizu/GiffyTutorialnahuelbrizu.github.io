import  { useContext } from 'react';
import GifsContexts from '../context/GifsContext';

export default function useGlobalGifs(){
    return useContext(GifsContexts)
}