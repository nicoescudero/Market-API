/**
 * @swagger
 *  components:
 *   schemas:
 *    User:
 *     type: object
 *     required:
 *      - username
 *      - email
 *      - password
 *     properties:
 *      id:
 *       type: string
 *       description: id generated automatically
 *      username:
 *       type: string
 *       description: username
 *      email:
 *       type: string
 *       description: email of user
 *      password:
 *       type: string
 *       description: password of user
 *     example:
 *      id: 1
 *      username: john99
 *      email: john99@gmail.com
 *      passwrod: fdsjfsdkljjro3ijio12irj1oirh23io
 * 
 *    UserRequirements:
 *     type: object
 *     properties:
 *      username:
 *       type: string
 *      email:
 *       type: string
 *      password:
 *       type: string
 *      photo:
 *       type: file
 *     example:
 *      username: ""
 *      email: ""
 *      password: ""
 *      photo: "photo address"
 *   parameters:
 *    userId:
 *     in: path
 *     name: userId
 *     required: true
 *     description: id of user
 *     schema:
 *      type: string
 *   responses:
 *    InvalidForm:
 *     description: Error Unprocessable Entity
 *     type: object
 *     content:
 *      application/json:
 *       example:
 *        errors: []
 *    NotFound:
 *     description: User not found
 *     type: object
 *     content:
 *      application/json:
 *       example:
 *        message: Error, User not found
 *    BadRequest:
 *     description: Bad Request
 *     type: object
 *     content:
 *      application/json:
 *       example:
 *        message: Invalid Form
 *    Success:
 *     description: Successful Operation
 *     type: object
 *     content:
 *      application/json:
 *       example:
 *        id: 1
 *        username: john99
 *        email: john99@gmail.com
 *        password: 3hi3ugi3bgiu43biqbli598
 *        
 * tags: 
 *  name: User
 *  description: User Data
 */

/**
 * @swagger
 * /auth/user/login:
 *  post:
 *   summary: Login a User
 *   tags: [User]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       example:
 *        email: ""
 *        password: ""
 *   responses:
 *    200:
 *     $ref: "#components/responses/Success"
 *    400:
 *     $ref: "#components/responses/BadRequest"
 *    404:
 *     $ref: "#components/responses/NotFound"
 *    422:
 *     $ref: "#components/responses/InvalidForm"
 */

/**
 * @swagger
 * /auth/user/register:
 *  post:
 *   summary: Create a User
 *   tags: [User]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: "#components/schemas/UserRequirements"
 *   responses:
 *    201:
 *     $ref: "#components/responses/Success"
 *    400:
 *     $ref: "#components/responses/BadRequest"
 *    422:
 *     $ref: "#components/responses/InvalidForm"
 */