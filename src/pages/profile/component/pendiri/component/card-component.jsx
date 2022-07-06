import { Fragment } from "react"
import image from '../../../../../image/IMG20181009102614.jpg'

const CardComponent = function(props) {
    return (
        <Fragment>
            <div id="wrapper-card" className="flex flex-col justify-around h-full my-10 w-ful lg:flex-row">
                <div id="img-cover" className={props.id % 2 === 0 ?  "w-[90%] m-auto lg:w-[30%] h-[250px] lg:h-[430px]  rounded-[10px] bg-cover bg-no-repeat lg:order-last" :  "w-[90%] m-auto lg:w-[30%] h-[250px] lg:h-[430px] rounded-[10px] bg-cover bg-no-repeat" } style={{ backgroundImage: `url(${image})`}}></div>
                <div id="information" className="h-full w-[95%] m-auto lg:w-[60%] p-[20px] box-border">
                    <p id="name" className="text-[40px] font-poppins text-green">
                        KH Ahmad Thohir Musthofa
                    </p>
                    <p id="founder" className="font-poppins text-[30px]">
                        PENDIRI YAYASAN BAITUL ATIEQ
                    </p>
                    <p id="desc" className="opacity-50 font-open-sans">
                        KH Ahmad Thohir Musthofa adalah pendiri sekaligus pengasuh pertama yayasan baitul atieq, Beliau berasal dari desa Cepoko, kecamatan Berbek, kabupaten Nganjuk, Provinsi Jawa Timur. beliau lahir pada 11 Dzulhijjah 1379 H./ 06 juni 1960 M dan menempuh pendidikan SD dan pondok, tepatny di pondok pesantren lirboyo. beliau telah menikah Pada tahun 1992 M. dengan Ibu Nyai Hj. Lu’luil Maknun putri ke-5 dari KH. Dalhar Effendi dan Ibu Nyai Hj. Thowilatul Umriyah. dan di karunai 3 orang anak yaitu Ning Lia Atiqotul Maula, gus M. Bagus Fatichur Ridho dan Agus M. Gandes Ibrahim. Beliau wafat pada hari Jum’at, tanggal 10 Shofar 1440 H./ 19 Oktober 2018 M. di desa Cepoko, kecamatan Berbek, kabupaten Nganjuk, Provinsi Jawa Timur.
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default CardComponent
