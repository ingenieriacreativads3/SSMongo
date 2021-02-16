import React from 'react';
import LoginExport from './Login'
import ResetExport from './resetPassword'
import RecoverExport from './recoverPass'

export function Login(props: any) {
	return <LoginExport { ...props } />
}

export function Reset(props: any) {
	return <ResetExport { ...props } />
}

export function Recover(props: any) {
	return <RecoverExport { ...props } />
}