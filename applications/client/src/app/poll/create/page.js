'use client';

import { prisma } from '@/lib/prisma';
import { QuestionType } from '@prisma/client';

const CreatePoll = () => {
   console.log(QuestionType);
   const handleCreatePoll = () => {};
   return (
      <div>
         <form onSubmit={handleCreatePoll}>
            <div>
               <label for='title'>Title:</label>
               <br />
               <input type='text' id='title' name='title' />
            </div>
            <div>
               <label for='expires'>Expires:</label>
               <br />
               <input type='date' id='expires' name='expires' />
            </div>
            <div>
               <label for='question'>Question:</label>
               <br />
               <input type='text' id='question' name='question' />
            </div>
            <div>
               <br />
               <button type='submit'>submit</button>
            </div>
         </form>
      </div>
   );
};

export default CreatePoll;
