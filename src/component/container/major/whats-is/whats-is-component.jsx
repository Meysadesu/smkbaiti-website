import { Fragment } from "react"

const WhatisComponent = function() {
    return (
        <Fragment>
            <div className="h-full w-full mt-[90px] lg:mt-0 mb-[200px]">
                <div className="w-full lg:w-[60%] h-full m-auto text-center">
                    <p id="header" className=" text-[30px] text-green font-poppins">Apa itu?</p>
                    <p className=" text-[40px] text-green font-poppins w-[90%] lg:w-full m-auto">TEKNIK KOMPUTER DAN JARINGAN</p>
                    <p className=" w-[90%] lg:w-full m-auto font-open-sans opacity-60 my-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi sem, iaculis at nulla ut, posuere vulputate lorem. Maecenas mattis faucibus felis at ultrices. Aenean accumsan, erat vel scelerisque lobortis, eros magna sodales nisi, eget tristique erat enim nec neque. Fusce ante elit, porttitor in lobortis nec, hendrerit ac sapien. Nullam elementum auctor massa non interdum. Phasellus accumsan gravida vulputate. In hac habitasse platea dictumst. Fusce at nibh finibus tortor porttitor interdum. Donec euismod eleifend velit, et malesuada ligula pretium ornare. Pellentesque metus urna, sollicitudin non lacinia et, tincidunt nec enim. Vestibulum ac elit elementum, lacinia nisi sit amet, blandit ante. Nam pulvinar a mi sed maximus. Vestibulum et sapien non risus accumsan ornare eu quis odio. In venenatis ac risus pharetra auctor.</p>
                </div>
            </div>
        </Fragment>
    )
}

export default WhatisComponent