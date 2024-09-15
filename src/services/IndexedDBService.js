// services/IndexedDBService.js

import Dexie from 'dexie';

const db = new Dexie('myDatabase');

db.version(1).stores({
  users: '++id, name, password, lastname, email, role, location, loggedIn',
  comments: '++id, user_id, content_id, text, created_at, updated_at',
  content: '++id, reporter_id, editor_id, reviewer_id, announcer_id, title, file, description, created_at, updated_at, status',
  files: '++id, title, filePath, contentId, userId, deleted, created_at, updated_at',
});

db.version(2).stores({
  // Adicione as novas tabelas ou atualizações de estrutura aqui
});

// Inserir dados nas tabelas
db.transaction('rw', db.comments, db.content, db.files, db.users, async () => {
  // await db.comments.bulkAdd([
  //   { user_id: 1, content_id: 1, text: 'Erro ao criar comentário', created_at: '2024-05-07 02:08:18', updated_at: '2024-05-07 02:08:18' },
  //   { user_id: 3, content_id: 1, text: 'asasassasasa', created_at: '2024-05-08 17:33:16', updated_at: '2024-05-08 17:33:16' },
  //   { user_id: 3, content_id: 1, text: 'asasassasasa', created_at: '2024-05-08 17:34:15', updated_at: '2024-05-08 17:34:15' },
  //   { user_id: 3, content_id: 1, text: 'asasassasasa', created_at: '2024-05-08 17:35:37', updated_at: '2024-05-08 17:35:37' },
  //   { user_id: 3, content_id: 1, text: '12', created_at: '2024-05-08 19:56:17', updated_at: '2024-05-08 19:56:17' }
  // ]);

  // await db.content.bulkAdd([
  //   { reporter_id: 2, title: '2joaosilva', file: 'senhasegura123', description: 'João da Silva', created_at: '2024-05-07 02:06:31', updated_at: '2024-05-07 02:06:31', status: 'draft' },
  //   { reporter_id: 2, title: '2joaosilva', file: 'senhasegura123', description: 'João da Silva', created_at: '2024-05-08 17:31:04', updated_at: '2024-05-08 17:31:04', status: 'pending' }
  // ]);

  // await db.files.bulkAdd([
  //   { title: 'Example Title', filePath: '/path/to/file', contentId: 1, userId: 1, created_at: '2024-05-07 02:08:18', updated_at: '2024-05-07 02:08:18' }
  // ]);

  const count = await db.users.count();

  if (count === 0) {
    await db.users.bulkAdd([
      {
        name: 'Admin',
        password: '123456',
        lastname: 'Admin',
        email: 'admin@g.com',
        role: 'admin',
        location: 'Admin Location',
        loggedIn: 1, // Defina como false, pois não está logado inicialmente
      }
    ]);
  }


}).then(() => {
  console.log('Dados inseridos com sucesso');
}).catch(err => {
  console.error('Erro ao inserir dados:', err);
});

export default db;
