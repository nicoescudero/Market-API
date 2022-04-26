/**
 * @swagger
 *  components:
 *   schemas:
 *    User:
 *     type: object
 *     required:
 *      - description
 *      - photo
 *      - idUser
 *     properties:
 *      id:
 *       type: integer
 *       description: id generated automatically
 *      description:
 *       type: string
 *       description: publication description
 *      photo:
 *       type: string
 *       description: picture of publication
 *      idUser:
 *       type: int
 *       description: user id
 *     example:
 *      id: 1
 *      description: play station 5
 *      photo: https://images.com/photos/ps5.jpg
 *      idUser: 1
 *    PublicationRequirements:
 *     type: object
 *     properties:
 *      description:
 *       type: string
 *      photo:
 *       type: file
 *     example:
 *      description: ""
 *      photo: "photo address"
 *   parameters:
 *    idP:
 *     in: path
 *     type: integer
 *     name: id
 *     required: true
 *     description: publication id
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
 *     description: Publication not found
 *     type: object
 *     content:
 *      application/json:
 *       example:
 *        message: Error, Publication not found
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
 *        description: play station 5
 *        photo: https://images.com/photos/ps5.jpg
 *        idUser: 1
 *        
 * tags: 
 *  name: Publication
 *  description: Publication Data
 */



/**
 * @swagger
 * /publication/get/{id}:
 *  get:
 *   summary: Get a Publication
 *   tags: [Publication]
 *   security:
 *      - bearerAuth: []
 *   parameters:
 *    - $ref: "#components/parameters/idP"
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
 * /publication/getAll:
 *  get:
 *   summary: Get All Publications by User Id
 *   tags: [Publication]
 *   security:
 *      - bearerAuth: []
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
 * /publication/new:
 *  post:
 *   summary: Create a publication
 *   tags: [Publication]
 *   security:
 *      - bearerAuth: []
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: "#components/schemas/PublicationRequirements"
 *   responses:
 *    200:
 *     $ref: "#components/responses/Success"
 *    400:
 *     $ref: "#components/responses/BadRequest"
 *    422:
 *     $ref: "#components/responses/InvalidForm"
 */

/**
 * @swagger
 * /publication/update/{id}:
 *  put:
 *   summary: Update a Publication
 *   tags: [Publication]
 *   security:
 *      - bearerAuth: []
 *   parameters:
 *    - $ref: "#components/parameters/idP"
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       example: 
 *         description: ""
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

/**
 * @swagger
 * /publication/delete/{id}:
 *  delete:
 *   summary: Delete a Publication
 *   tags: [Publication]
 *   security:
 *      - bearerAuth: []
 *   parameters:
 *    - $ref: "#components/parameters/idP"
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