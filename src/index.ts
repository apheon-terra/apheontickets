// import { BadRequestError } from './errors/bad-request-error';

// interface Color {
//     red: number;
//     blue: number;
//     green:number
// }

// const color: Color = {
//     red: 20,
//     blue: 10,
//     green: 10
// };

// console.log(color);

// export default color;

// two options to import 
//bad
// import { BadRequestError } from '@apheontickets/common/errors/bad-request-error'

//better
// import { BadRequestError } from '@apheontickets/common'

//for solution 2d
export * from './errors/bad-request-error';
export * from './errors/custom-error';
export * from './errors/database-connection-error';
export * from './errors/not-authorized-error';
export * from './errors/not-found-error';
export * from './errors/request-validation-error';

export * from './middlewares/current-user';
export * from './middlewares/error-handler';
export * from './middlewares/require-auth';
export * from './middlewares/validate-request';
