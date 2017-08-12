/// <reference path="../References.d.ts"/>
import * as AgentTyeps from './AgentTypes';

export const SYNC = 'audit.sync';
export const CHANGE = 'audit.change';

export interface Audit {
	id: string;
	user?: string;
	timestamp?: string;
	type?: string;
	fields?: {[key: string]: string};
	agent?: AgentTyeps.Agent;
}

export type Audits = Audit[];

export type AuditRo = Readonly<Audit>;
export type AuditsRo = ReadonlyArray<AuditRo>;

export interface AuditDispatch {
	type: string;
	data?: {
		id?: string;
		userId?: string;
		audit?: Audit;
		audits?: Audits;
	};
}