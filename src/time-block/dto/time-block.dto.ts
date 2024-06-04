import { IsNumber, IsOptional, IsString } from 'class-validator'

export class TimeBlockDto {
	@IsOptional()
	@IsString()
	color?: string

	@IsNumber()
	duration: number

	@IsString()
	name: string

	@IsOptional()
	@IsNumber()
	order: number
}
