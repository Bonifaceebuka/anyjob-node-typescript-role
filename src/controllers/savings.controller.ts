import { Response } from "express";
import SavingsGroup from "../models/savingsGroup.model";
import { isValidUser } from "../functions/utils";
import { IUserAuthRequest } from '../interfaces/user.interface';
import { v4 as uuidv4 } from 'uuid';

export const newSavingsGroup = async (request: IUserAuthRequest, response: Response): Promise<Response> => {
  const { group_name, group_description, group_creator} = request.body;
  const { id } = request.user;

  if(await isValidUser(group_creator) === false){
      return response.status(404).json({ message: 'User does not exist!' });
  }

  if(await isValidUser(id) === false){
        return response.status(404).json({ message: 'User does not exist!' });
    }

  const group_invite_code = uuidv4();
  const data = {
      group_name: group_name,
      group_description: group_description,
      group_creator: group_creator,
      group_invite_code: group_invite_code
  }
  try {
    const savingsGroup = await SavingsGroup.create(data);
    return response.status(201).json({
      message: 'Savings group Created', 
      data: savingsGroup
  });
  } catch (error) {
    return response.status(400).json({ error: 'Unable to create savings group!' });
  }
 
  
}

