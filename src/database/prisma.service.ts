import { inject, injectable } from 'inversify'
import { PrismaClient } from '@prisma/client'

import { TYPES } from '../types'
import { ILogger } from '../interfaces'

@injectable()
export class PrismaService {
	client: PrismaClient

	constructor(@inject(TYPES.ILogger) private logger: ILogger) {
		this.client = new PrismaClient()
	}

	async connect(): Promise<void> {
		try {
			await this.client.$connect()
			this.logger.log(`[PrismaService] успешно подключена к базе данных`)
		} catch (err) {
			if (err instanceof Error) {
				this.logger.error(`[PrismaService] ошибка подключения к базе данных ${err.message}`)
			}
		}
	}

	async disconnect(): Promise<void> {
		await this.client.$disconnect()
	}
}
