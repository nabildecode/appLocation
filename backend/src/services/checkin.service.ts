<<<<<<< HEAD

import {Between, Equal, FindOptionsWhere, LessThanOrEqual,MoreThanOrEqual} from 'typeorm';
=======
import { Equal, FindOptionsWhere, createQueryBuilder } from 'typeorm';
>>>>>>> 8013e37a37823c2f0b4096555a5ae72c4ca74685

import { AppDataSource } from '../orm/data-source';
import { ChekinEntity } from '../orm/entities/checkin.entity';
import {AppartementEntity} from "../orm/entities/appartement.entity";

const checkinRespository = AppDataSource.getRepository(ChekinEntity);


export const createCheckin = async (input: Partial<ChekinEntity>) => {
  return await checkinRespository.save(checkinRespository.create(input));
};

export const saveCheckin = async (checkin: ChekinEntity) => {
  return await checkinRespository.save(checkin);
};

export const findCheckinsByUser = async (userId: number, relations = []) => {
  return await checkinRespository.find({
    where: { user: Equal(userId) },
    relations: relations,
  });
};

export const findCheckinByIdAndUser = async (
  checkId: number,
  userId: number,
  relations = []
) => {
  return await checkinRespository.findOne({
    where: { id: Equal(checkId), user: Equal(userId) },
    relations: relations,
  });
};

export const deleteCheckinById = async (id) => {
  return await checkinRespository.delete({ id: Equal(id) });
};

export const deleteCheckinByAppId = async (id) => {
  return await checkinRespository.delete({ appartement: Equal(id) });
};

export const findCheckinById = async (
  checkId: number,
  userId: number,
  relations = []
) => {
  return await checkinRespository.findOne({
    where: { id: Equal(checkId), user: Equal(userId) },
    relations: relations,
  });
};

export const findCheckinAll = async () => {
  return await checkinRespository.find();
};


export const findReservationsWithApartments = async () => {

  return  await checkinRespository.find({

    relations: ['appartement'] });
};
export const findReservationsById = async (userId: any) => {
<<<<<<< HEAD
  return await checkinRespository.createQueryBuilder('ChekinEntity').innerJoinAndSelect("ChekinEntity.appartement", "appartement").where("(appartement.user = :userId)") .setParameters({ userId: userId }).getMany()
};


// export const findReservationsByYear = async (year: number, appartementId: number) => {
//   try {
//     const startDate = new Date(year, 0, 1); // Beginning of the year
//     const endDate = new Date(year, 11, 31); // End of the year

//     const reservations: ChekinEntity[] = await checkinRespository.find({
//       where: {
//         //user: Equal(userId),
//         appartement: Equal(appartementId),
//         date_debut: Between(startDate, endDate),
//       },
//       relations: ['appartement'],
//     });

//     // Initialize an object to store aggregated data by month and apartmentId
//     const report: { [key: string]: MonthlyReport } = {};

//     // Aggregate data by month and apartmentId
//     reservations.forEach(reservation => {
//       const startDate = new Date(reservation.date_debut);
//       const month = startDate.getMonth() + 1; // getMonth() returns 0-11, adding 1 for 1-12
//       const apartmentId = reservation.appartement.id;

//       const key = `${year}-${month}-${apartmentId}`;

//       if (!report[key]) {
//         report[key] = {
//           year: year,
//           month: month,
//           totalNights: 0,
//           totalPrice: 0,
//           occupation: 0,
//           apartmentId: apartmentId,
//         };
//       }

//       report[key].totalNights += reservation.nombre_nuits;
//       report[key].occupation++;
//       report[key].totalPrice += reservation.prix_total;
//     });

//     // Convert the report object to an array
//     return Object.values(report);
//   } catch (error) {
//     console.error('Error fetching reservations by year: ', error);
//     throw error;
//   }
// };
=======
  const user = await createQueryBuilder("checkin")
  .innerJoin("checkins.appartement", "appartement")
  //.where("user.name = :name", { name: "Timber" })
  .getMany()
};
>>>>>>> 8013e37a37823c2f0b4096555a5ae72c4ca74685
