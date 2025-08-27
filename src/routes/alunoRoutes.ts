import { Router } from "express";
import {alunoController} from "../controllers/alunoController";

const router = Router();
const aluno = new alunoController();

/**
 * @swagger
 * components:
 *  schemas:
 *      Aluno:
 *          type: object
 *          required:
 *              - ra
 *              - nome
 *              - email
 *          properties:
 *              ra:
 *                  type: string
 *                  description: Identificador escolar
 *              nome:
 *                  type: string
 *                  description: Nome do aluno
 *              email:
 *                  type: string
 *                  description: Email do aluno
 */

/**
* @swagger
* /aluno:
*   get:
*       summary: Lista todos os alunos
*       tags: [Alunos]
*       responses:
*           200:
*               description: Lista de alunos
*               content:
*                   application/json:
*                       schema:
*                           type: array
*                           items:
*                               $ref: '#/components/schemas/Aluno'
*/

router.get("/", (req, res) => aluno.get(req, res));

/**
* @swagger
* /aluno:
*   post:
*       summary: Criar um aluno
*       tags: [Alunos]
*       requestBody:
*           required: true
*           content:
*               application/json:
*                   schema:
*                       $ref: '#components/schemas/Aluno'
*       responses:
*           201:
*               description: Aluno criado
*               content:
*                   application/json:
*                       schema:
*                           $ref: '#/components/schemas/Aluno'
*/

router.post("/", (req, res) => aluno.create(req, res));
router.put("/:ra", (req, res) => aluno.update(req, res));

export default router;