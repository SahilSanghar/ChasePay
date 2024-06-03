import React from 'react'
import quiz from '../../../../assets/Quiz.svg'
const TakeQuiz = () => {
return (
    <div className='mt-[50px] bg-[#ECF4FF] d-flex ps-[280px]'>
        <div>
            <p className='py-[30px] text-2xl'>
            Need help finding the right checking account?
                <br /><b>
                    We can help
                </b>
            </p>
        </div>
        <div>
            <button type="button" className="btn btn-primary my-[50px] h-[40px] w-[220px] bg-[#0B6EFD] text-2xl px-[12px] py-[6px] ms-[50px]">Take quiz now</button>
        </div>
        <div>
            <img src={quiz} alt="quiz" className='h-[110px] w-[130px] opacity-100 mt-[32px] ml-[50px]' />
        </div>
    </div>
)
}

export default TakeQuiz