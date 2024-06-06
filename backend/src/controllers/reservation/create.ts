import { Request, Response, NextFunction } from 'express';
import {findUserByEmail, findUserById} from '../../services/user.service';
import { createCheckin, saveCheckin } from '../../services/checkin.service';
<<<<<<< HEAD
import {findAppartementById, saveAppartement} from '../../services/appartement.service';
=======
import {findAppartementById} from '../../services/appartement.service';
>>>>>>> 8013e37a37823c2f0b4096555a5ae72c4ca74685

export const create = async (req: Request, res: Response, next: NextFunction) => {
  const {  appartementId, commission, date_debut, nom_client, prix_nuit, nombre_nuits  } = req.body;

  try {
  /*  const currentUser = await findUserById(userId);
    if (!currentUser) {
      return res.customSuccess(404, 'User not found');
    }*/
    console.log(appartementId)
    const appartement = await findAppartementById(appartementId);
    if (!appartement) {
      return res.customSuccess(404, 'Appartement not found');
    }
    //const user = await findUserByEmail(nom_client);
    const prix_total = prix_nuit * nombre_nuits;

    const newCheckin = await createCheckin({
      appartement:appartement,
    date_debut,
      nom_client,
     nombre_nuits,
      commission,
     prix_nuit,
      prix_total
    });

      const appartements = await findAppartementById(Number(appartement.id));
      appartements.status=1;
      await saveAppartement(appartements);

    await saveCheckin(newCheckin);
    return res.customSuccess(200, 'Reservation successfully created.', { checkin: newCheckin }, true);
  } catch (err) {
    console.error(err);
    return res.customSuccess(500, 'Reservation cannot be created', {}, false);
  }
};