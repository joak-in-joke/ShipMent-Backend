import users from '../models/users';
import roles from '../models/roles';
import personales from '../models/personal';
import provedores from '../models/provedores';
import trasbordo from '../models/trasbordos';
import embarques from '../models/embarques';
import datos from '../models/datos';
import comentarios from '../models/comentarios';



// M:N

users.hasMany(roles, {foreingKey: 'roles_id', sourceKey: 'id'});
roles.belongsTo(users, {foreingKey: 'roles_id', sourceKey: 'id'});

personales.hasMany(users, {foreingKey: 'id_personal', sourceKey:'id'});
users.belongsTo(personales, { foreingKey: 'id_personal', sourcekey: 'id'});





