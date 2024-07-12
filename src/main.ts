import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	app.setGlobalPrefix('api')
	app.use(cookieParser())
	app.enableCors({
		origin: [
			'http://localhost:3000',
			'https://planner-frontend-uw4b.onrender.com',
			'https://planner-frontend-blush.vercel.app',
			'https://planner-backend-p4ab.onrender.com',
			'https://planner-frontend-alexgerasimov73s-projects.vercel.app',
			'https://planner-frontend-git-main-alexgerasimov73s-projects.vercel.app'
		],
		credentials: true,
		exposedHeaders: 'set-cookie'
	})

	await app.listen(4200)
}
bootstrap()
