import { Priority } from '@prisma/client'
import { Transform } from 'class-transformer'
import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator'

export class TaskDto {
	@IsOptional()
	@IsString()
	createdAt?: string

	@IsOptional()
	@IsBoolean()
	isCompleted?: boolean

	@IsOptional()
	@IsString()
	name: string

	@IsEnum(Priority)
	@IsOptional()
	@Transform(({ value }) => String(value).toLowerCase())
	priority?: Priority
}
