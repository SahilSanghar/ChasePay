import React from 'react';
import MostPop from '../../../../assets/MostPop.png';
import GTick from '../../../../assets/GTick.svg';

const Everyday = () => {
    return (
        <div className='text-center mt-1'>
            <h2>
                Compare your options: Open a checking account online today
            </h2>
            <div className='h-[58px] w-[910px] mx-auto pt-[10px] bg-[#ECEFF1]'>
                <p>
                    Show me checking accounts for: &nbsp;
                    <div className="btn-group bg-white text-black" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                        <label className="btn btn-outline-primary" htmlFor="btnradio1">Everyday</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                        <label className="btn btn-outline-primary" htmlFor="btnradio2">Kids & Students</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                        <label className="btn btn-outline-primary" htmlFor="btnradio3">Premium</label>
                    </div>
                </p>
            </div>
            <div className="row mt-3 px-[290px]">
                <div className="col px-1">
                    <div className="bg-[#002F6C] text-[#FFF] h-[190px] pt-1">
                        <img src={MostPop} alt="Most Popular" className='h-[20px] w-fit opacity-100 ml-0' />
                        <a href="#" className='text-white text-lg px-3'>Chase Total Checking&reg;</a>
                        <p className='px-3'>Our most popular checking account with the banking essentials</p>
                        <button type="button" className="btn btn-success h-[45px] w-[200px] text-2xl text-white bg-[#398100] border-white">Open now</button>
                    </div>
                </div>

                <div className="col p-0">
                    <div className="bg-[#002F6C] text-[#FFF] h-[190px] px-3">
                        <br />
                        <a href="#" className='text-white text-lg'>Chase Secure Banking</a>
                        <p>A simple checking account with no overdraft fees</p>
                        <button type="button" className="btn btn-success h-[45px] w-[200px] text-2xl text-white bg-[#398100] border-white">Open now</button>
                    </div>
                </div>

                <div className="col px-1">
                    <div className="bg-[#002F6C] text-[#FFF] h-[190px]">
                        <br />
                        <a href="#" className='text-white text-lg'>Chase Premier Plus Checking&#8480;</a>
                        <p>Save money on non-Chase ATM transactions, money orders, and more<sup>1</sup></p>
                        <button type="button" className="btn btn-success h-[45px] w-[200px] text-2xl text-white bg-[#398100] border-white">Open now</button>
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col px-0">
                <div className='bg-[#ECEFF1] text-xl text-left h-[50px] pt-2 ps-5'>
                        <p>No minimum deposit to open</p>
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col-4 px-0">
                <div className='text-xl h-[50px] pt-2 border-r-2 border-r-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                    </div>
                </div>
                <div className="col-4 px-1">
                    <div className='text-xl h-[50px] pt-2 border-x-2 border-x-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                    </div>
                </div>
                <div className="col-4 px-0">
                    <div className='text-xl h-[50px] pt-2 border-l-2 border-l-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col px-0">
                    <div className='bg-[#ECEFF1] text-xl text-left ps-5 h-[50px] pt-2'>
                        <p>Monthly Service Fee <sup><a href="">2</a></sup></p>
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col-4 px-0">
                    <div className='text-xl h-[100px] pt-2 border-r-2 border-r-[#ECEFF1]'>
                        <p>$12 or $0</p>
                        <a href="#">Avoid fee</a>
                    </div>
                </div>
                <div className="col-4 px-1">
                    <div className='text-xl h-[100px] pt-2 border-x-2 border-x-[#ECEFF1]'>
                        <p>$4.95 or $0</p>
                        <a href="#">Avoid fee</a>
                    </div>
                </div>
                <div className="col-4 px-0">
                <div className='text-xl h-[100px] pt-2 border-l-2 border-l-[#ECEFF1]'>
                        <p>$25 or $0</p>
                        <a href="#">Avoid fee</a>
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col px-0">
                    <div className='bg-[#ECEFF1] text-xl text-left ps-5 h-[50px] pt-2'>
                        <p>More than 15,000 ATMs and more than 47,000 branches</p>
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col-4 px-0">
                    <div className='text-xl h-[50px] pt-2 border-r-2 border-r-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                    </div>
                </div>
                <div className="col-4 px-1">
                    <div className='text-xl h-[50px] pt-2 border-x-2 border-x-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                    </div>
                </div>
                <div className="col-4 px-0">
                    <div className='text-xl h-[50px] pt-2 border-l-2 border-l-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col px-0">
                    <div className='bg-[#ECEFF1] text-xl text-left ps-5 h-[50px] pt-2'>
                        <p>Chasepay Online&#8480; Banking, Online Bill Pay&#8480;<sup><a href="#">3</a></sup> and Chasepay Mobile Banking</p>
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col-4 px-0">
                    <div className='text-xl h-[50px] pt-2 border-r-2 border-r-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                    </div>
                </div>
                <div className="col-4 px-1">
                    <div className='text-xl h-[50px] pt-2 border-x-2 border-x-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                    </div>
                </div>
                <div className="col-4 px-0">
                    <div className='text-xl h-[50px] pt-2 border-l-2 border-l-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col px-0">
                    <div className='bg-[#ECEFF1] text-xl text-left ps-5 h-[50px] pt-2'>
                        <p>Zelle&reg;- Quickly send and receive money<sup><a href="#">4</a></sup></p>
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col-4 px-0">
                    <div className='text-xl h-[50px] pt-2 border-r-2 border-r-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                    </div>
                </div>
                <div className="col-4 px-1">
                    <div className='text-xl h-[50px] pt-2 border-x-2 border-x-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                    </div>
                </div>
                <div className="col-4 px-0">
                    <div className='text-xl h-[50px] pt-2 border-l-2 border-l-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col px-0">
                    <div className='bg-[#ECEFF1] text-xl text-left ps-5 h-[50px] pt-2'>
                        <p>Access to more than 15,000 ATMs and more than 4,700 branches</p>
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col-4 px-0">
                    <div className='text-xl h-[50px] pt-2 border-r-2 border-r-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                    </div>
                </div>
                <div className="col-4 px-1">
                    <div className='text-xl h-[50px] pt-2 border-x-2 border-x-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                    </div>
                </div>
                <div className="col-4 px-0">
                    <div className='text-xl h-[50px] pt-2 border-l-2 border-l-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col px-0">
                    <div className='bg-[#ECEFF1] text-xl text-left  ps-5 h-[50px] pt-2'>
                        <p>Banking on the go with the Chase Mobile&#8480; app</p>
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col-4 px-0">
                    <div className='text-xl h-[50px] pt-2 border-r-2 border-r-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                    </div>
                </div>
                <div className="col-4 px-1">
                    <div className='text-xl h-[50px] pt-2 border-x-2 border-x-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                    </div>
                </div>
                <div className="col-4 px-0">
                    <div className='text-xl h-[50px] pt-2 border-l-2 border-l-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col px-0">
                    <div className='bg-[#ECEFF1] text-xl text-left  ps-5 h-[50px] pt-2'>
                        <p>Autosave makes saving easy with automatic transfers to a Chasepay savings account</p>
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col-4 px-0">
                    <div className='text-xl h-[50px] pt-2 border-r-2 border-r-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                    </div>
                </div>
                <div className="col-4 px-1">
                    <div className='text-xl h-[50px] pt-2 border-x-2 border-x-[#ECEFF1]'>
                        <h4>&mdash;</h4>
                    </div>
                </div>
                <div className="col-4 px-0">
                    <div className='text-xl h-[50px] pt-2 border-l-2 border-l-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col px-0">
                    <div className='bg-[#ECEFF1] text-xl text-left  ps-5 h-[70px] pt-2'>
                        <p>Get Chase First Banking&#8480;—a checking account for you and your child that comes with its very own debit card</p>
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col-4 px-0">
                    <div className='text-xl h-[50px] pt-2 border-r-2 border-r-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                    </div>
                </div>
                <div className="col-4 px-1">
                    <div className='text-xl h-[50px] pt-2 border-l-2 border-l-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                    </div>
                </div>
                <div className="col-4 px-0">
                    <div className='text-xl h-[50px] pt-2 border-l-2 border-l-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col px-0">
                    <div className='bg-[#ECEFF1] text-xl text-left  ps-5 h-[50px] pt-2'>
                        <p><a href="">Chasepay Overdraft Assist&#8480;<sup><a href="">5</a></sup></a></p>
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col-4 px-0">
                    <div className='text-xl h-[140px] pt-5 border-r-2 border-r-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                    </div>
                </div>
                <div className="col-4 px-1">
                    <div className='text-xl h-[140px] pt-2 border-x-2 border-x-[#ECEFF1]'>
                        <h4>&mdash;</h4>
                        <p>Spend only the money you have available, without worrying about overdraft fees<sup><a href="">6</a></sup></p>
                    </div>
                </div>
                <div className="col-4 px-0">
                    <div className='text-xl h-[140px] pt-5 border-l-2 border-l-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col px-0">
                    <div className='bg-[#ECEFF1] text-xl text-left  ps-5 h-[50px] pt-2'>
                        <p>Early direct deposit — with direct deposit, get your money up to two business days early<sup><a href="">7</a></sup></p>
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col-4 px-0">
                    <div className='text-xl h-[50px] pt-2 border-r-2 border-r-[#ECEFF1]'>
                        <h4>&mdash;</h4>
                    </div>
                </div>
                <div className="col-4 px-1">
                    <div className='text-xl h-[50px] pt-2 border-l-2 border-l-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                    </div>
                </div>
                <div className="col-4 px-0">
                    <div className='text-xl h-[50px] pt-2 border-l-2 border-l-[#ECEFF1]'>
                        <h4>&mdash;</h4>
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col px-0">
                    <div className='bg-[#ECEFF1] text-xl text-left  ps-5 h-[50px] pt-2'>
                        <p>No fees for money orders and cashier's checks</p>
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col-4 px-0">
                    <div className='text-xl h-[50px] pt-2 border-r-2 border-r-[#ECEFF1]'>
                        <h4>&mdash;</h4>
                    </div>
                </div>
                <div className="col-4 px-1">
                    <div className='text-xl h-[50px] pt-2 border-l-2 border-l-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                    </div>
                </div>
                <div className="col-4 px-0">
                    <div className='text-xl h-[50px] pt-2 border-l-2 border-l-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col px-0">
                    <div className='bg-[#ECEFF1] text-xl text-left  ps-5 h-[50px] pt-2'>
                        <p>No Chasepay fee at non-Chasepay ATMs</p>
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col-4 px-0">
                    <div className='text-xl h-[90px] pt-2 border-r-2 border-r-[#ECEFF1]'>
                        <h4>&mdash;</h4>
                    </div>
                </div>
                <div className="col-4 px-1">
                    <div className='text-xl h-[90px] pt-2 border-x-2 border-x-[#ECEFF1]'>
                        <h4>&mdash;</h4>
                    </div>
                </div>
                <div className="col-4 px-0">
                    <div className='text-xl h-[90px] pt-2 border-l-2 border-l-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                        <p>4 times per statement period<sup><a href="">1</a></sup></p>
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col px-0">
                    <div className='bg-[#ECEFF1] text-xl text-left  ps-5 h-[50px] pt-2'>
                        <p>No Monthly Service Fee on a linked Chase Savings&#8480; account<sup><a href="">8</a></sup></p>
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col-4 px-0">
                    <div className='text-xl h-[180px] pt-20 border-r-2 border-r-[#ECEFF1]'>
                        <h4>&mdash;</h4>
                    </div>
                </div>
                <div className="col-4 px-1">
                    <div className='text-xl h-[180px] pt-20 border-x-2 border-x-[#ECEFF1]'>
                        <h4>&mdash;</h4>
                    </div>
                </div>
                <div className="col-4 px-0">
                    <div className='text-xl h-[180px] pt-3 border-l-2 border-l-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                        <p className='px-3'>Up to 2 Chasepay Premier Plus Checking accounts and a personal Chasepay savings account</p>
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col px-0">
                    <div className='bg-[#ECEFF1] text-xl text-left  ps-5 h-[50px] pt-2'>
                        <p>No Chase fees for checks</p>
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col-4 px-0">
                    <div className='text-xl h-[90px] pt-2 border-r-2 border-r-[#ECEFF1]'>
                        <h4>&mdash;</h4>
                    </div>
                </div>
                <div className="col-4 px-1">
                    <div className='text-xl h-[90px] pt-2 border-x-2 border-x-[#ECEFF1]'>
                        <h4>&mdash;</h4>
                        <p>No paper checks</p>
                    </div>
                </div>
                <div className="col-4 px-0">
                    <div className='text-xl h-[90px] pt-2 border-l-2 border-l-[#ECEFF1]'>
                        <img src={GTick} alt="GTick" className='h-[30px] w-[30px] mx-auto' />
                        <p>Chasepay design checks<sup><a href="">9</a></sup></p>
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col px-0">
                    <div className='bg-[#ECEFF1] text-xl text-left  ps-5 h-[50px] pt-2'>
                        <p>Earn interest</p>
                    </div>
                </div>
            </div>


            <div className="row px-[294px]">
                <div className="col-4 px-0">
                    <div className='text-xl h-[50px] pt-2 border-r-2 border-b-2 border-r-[#ECEFF1]'>
                        <h4>&mdash;</h4>
                    </div>
                </div>
                <div className="col-4 px-1">
                    <div className='text-xl h-[50px] pt-2 border-x-2 border-b-2 border-x-[#ECEFF1]'>
                        <h4>&mdash;</h4>
                    </div>
                </div>
                <div className="col-4 px-0">
                    <div className='text-xl h-[50px] pt-2 border-l-2 border-b-2 border-l-[#ECEFF1]'>
                        <h4>&mdash;</h4>
                    </div>
                </div>
            </div>

            <div className="row px-[294px]">
                <div className="col-4 px-0">
                    <div className='text-xl h-[50px] pt-2 border-r-2 border-b-2 border-r-[#ECEFF1]'>
                        <a href="">See account details</a>
                    </div>
                </div>
                <div className="col-4 px-1">
                    <div className='text-xl h-[50px] pt-2 border-x-2 border-b-2 border-x-[#ECEFF1]'>
                        <a href="">See account details</a>
                    </div>
                </div>
                <div className="col-4 px-0">
                    <div className='text-xl h-[50px] pt-2 border-l-2 border-b-2 border-l-[#ECEFF1]'>
                        <a href="">See account details</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Everyday;
