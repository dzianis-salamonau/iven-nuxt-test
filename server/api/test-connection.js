import { getConnection } from '../db/connection';

export default defineEventHandler(async (event) => {
  try {
    const connection = await getConnection();
    const [rows] = await connection.query('SELECT * From iven_products limit 10');  // Test if the connection is alive
    //connection.end();
    return { message: rows };
  } catch (error) {
    return { message: 'Database connection failed', error: error.message };
  }
});
