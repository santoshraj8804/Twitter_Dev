import CrudRepository from './crud-repository.js';
import Comment from '../models/comment.js';

export default class CommentRepository extends CrudRepository {
    constructor() {
        super(Comment);
    }
} 