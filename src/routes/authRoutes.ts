import { Router } from 'express';
import { AuthController } from '../controllers/authController';

const router = Router();
const authController = new AuthController();

/**
 * @swagger
 * components:
 *  securitySchemes:
 *      bearerAuth:
 *          type: http
 *          schema: bearer
 *          bearerFormat: JWT
 */

/**
 * @swagger
 * /login:
 *  post:
 *      summary: Autenticação na API de Alunos
 *      tags: [Auth]
 *      requestBody: 
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - email
 *                          - password
 *                      properties:
 *                          email:
 *                              type: string
 *                              example: teste@teste.com
 *                          password:
 *                              type: string
 *                              example: senha123
 *      responses:
 *          200:
 *              description: Login realizado com sucesso
 *              content:
 *                  type: object
 *                  properties:
 *                      token:
 *                          type: string
 *          401:
 *              description: Credenciais inválidas
 */
router.post("/auth/login", (req,res) => authController.login(req,res));

/**
 * @swagger
 * /register:
 *  post:
 *      summary: Cadastro de login na API de Alunos
 *      tags: [Auth]
 *      requestBody: 
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - email
 *                          - password
 *                          - nome
 *                      properties:
 *                          email:
 *                              type: string
 *                          password:
 *                              type: string
 *                          nome:
 *                              type: string
 *      responses:
 *          201:
 *              description: Cadastro realizado com sucesso
 *              content:
 *                  type: object
 *                  properties:
 *                      token:
 *                          type: string
 *          401:
 *              description: Dados inválidos
 */
router.post("/auth/register", (req,res) => authController.register(req,res));

export default router;