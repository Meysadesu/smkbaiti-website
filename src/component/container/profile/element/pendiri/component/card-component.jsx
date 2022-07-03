import { Fragment } from "react"

const CardComponent = function(props) {
    return (
        <Fragment>
            <div id="wrapper-card" className="w-ful h-full flex flex-col lg:flex-row justify-around  my-10">
                <div id="img-cover" className={props.id % 2 === 0 ?  "w-[90%] m-auto lg:w-[30%] h-[250px] lg:h-[430px]  rounded-[10px] bg-cover bg-no-repeat lg:order-last" :  "w-[90%] m-auto lg:w-[30%] h-[250px] lg:h-[430px] rounded-[10px] bg-cover bg-no-repeat" } style={{ backgroundImage: `url(https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)`}}></div>
                <div id="information" className="h-full w-[95%] m-auto lg:w-[60%] p-[20px] box-border">
                    <p id="name" className="text-[60px] font-poppins text-green">
                        Jhon Dhe
                    </p>
                    <p id="founder" className="font-poppins text-[30px]">
                        PENDIRI YAYASAN BAITUL ATIEQ
                    </p>
                    <p id="desc" className=" opacity-50">Vestibulum dictum varius nulla. Praesent porttitor maximus magna, sed blandit erat volutpat id. Morbi eget tellus porta, eleifend nisl in, elementum justo. Praesent eget elit mi. Nulla posuere in ex non mattis. Integer vel cursus lacus. Duis varius eget turpis quis laoreet. Pellentesque interdum tellus vitae neque varius, ac dictum lacus tempus. Pellentesque auctor lorem eu augue elementum lacinia. Integer a massa finibus, elementum felis et, aliquam nulla. Donec felis ipsum, maximus et molestie sed, maximus nec tortor. Fusce nec nibh gravida nisi euismod lobortis sit amet ac felis. Suspendisse quis rhoncus lorem. In metus nisi, varius at pharetra in, aliquet non magna. Vestibulum tincidunt, massa a venenatis laoreet, erat enim mollis justo, quis porta ipsum sapien et nibh.</p>
                </div>
            </div>
        </Fragment>
    )
}

export default CardComponent