import { createAction } from 'redux-actions';
import { applyPenders } from 'redux-pender';
import CryptoJS from 'crypto-js';

export interface USER_INFO {
    name:string;
}