import Joi                               from '@hapi/joi';


export const NAME_PATTERN = /^[A-Z][a-z]{0,255}$/;
export const PASSWORD_PATTERN = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)[A-Za-z0-9_@#%!?\-^]{8,60}$/;



const nameSchema = Joi.string().pattern(NAME_PATTERN);
const emailSchema = Joi.string().email();
const passwordSchema = Joi.string().pattern( PASSWORD_PATTERN );


export default Joi.object ={
    
}