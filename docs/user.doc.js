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
 *      password: $2b$10$8IFeWBoqnEz9BtWBtjC5XumW793de59r5O6TvcCq076aw1DAw6I9m
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
 *    id:
 *     in: path
 *     type: integer
 *     name: id
 *     required: true
 *     description: id of user
 *     schema:
 *      type: integer
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
 * /user/auth/login:
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
 * /user/auth/register:
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


/**
 * @swagger
 * /user/delete/{id}:
 *  delete:
 *   summary: Delete a User
 *   tags: [User]
 *   parameters:
 *    - $ref: "#components/parameters/id"
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
 * /user/update/{id}:
 *  put:
 *   summary: Update a User
 *   tags: [User]
 *   parameters:
 *    - $ref: "#components/parameters/id"
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       example: 
 *         username: ""
 *         email: ""
 *         password: ""
 *         newPassword: ""
 *         photo: "photo address"
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