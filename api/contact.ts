import { handle } from 'hono/vercel';
import app from '../src/worker/index';

export default handle(app);
