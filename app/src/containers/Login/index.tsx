import React from 'react';
import LoginExport from './Login'
import LoginAdminExport from './LoginAdmin'
import ResetExport from './resetPassword'
import RecoverExport from './recoverPass'

export function LoginAdmin(props: any) {
	return <LoginAdminExport { ...props } />
}

export function Login(props: any) {
	return <LoginExport { ...props } />
}

export function Reset(props: any) {
	return <ResetExport { ...props } />
}

export function Recover(props: any) {
	return <RecoverExport { ...props } />
}