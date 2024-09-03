import { getConnection } from '../../db/connection';

export default defineEventHandler(async (event) => {
  const { slug } = event.context.params;

  const tableName = 'iven_products'; // Example of a static table name

  try {
    const connection = getConnection();
    const [rows] = await connection.execute(`SELECT * FROM \`${tableName}\` WHERE uri = ?`, [slug]);

    if (rows.length > 0) {
      return rows[0]; // Return the product data
    } else {
      return { message: 'Товар не найден' }; // Product not found
    }
  } catch (error) {
    return { message: 'Database query failed', error: error.message };
  }
});
