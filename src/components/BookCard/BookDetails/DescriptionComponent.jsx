import React from 'react'

const DescriptionComponent = ({description}) => {
    console.log('console', description)
  return (
    <div className='pt-5 hidden md:flex flex-col w-full overflow-clip font-inter'>
        <div className='w-full md:h-[60px] flex items-center border-b border-[silver]'>
            <h4 className='text-lg font-semibold tracking-wider'>Description</h4>
        </div>
        <div className='p-3 font-regular text-sm clamp'>
            <p>{description ? description : <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed commodo risus. Proin non ante id lacus molestie pulvinar a eu risus. Donec sollicitudin molestie felis eu varius. Donec at viverra dolor. Proin dignissim justo eget nulla commodo sollicitudin. Quisque accumsan at risus nec commodo. Proin porta vehicula arcu ac varius. In hac habitasse platea dictumst. Phasellus ornare arcu ornare, sodales tellus eu, fringilla metus. Nullam sit amet nunc nec velit laoreet pellentesque. Proin massa urna, ornare et nibh at, rhoncus gravida felis.

Suspendisse egestas tempor ipsum et faucibus. Quisque ut ligula ipsum. Sed ut enim elit. Cras luctus velit sed elit maximus elementum. Vivamus sed nulla vel elit fringilla rutrum. Phasellus rhoncus quam eu mauris porta viverra. In et augue a velit congue luctus vel eu ligula. In hac habitasse platea dictumst. Nullam sodales tristique odio, quis rhoncus tortor sagittis a. Fusce augue nunc, laoreet gravida nisl vel, convallis porttitor mauris. Integer ut tortor mi.

Nunc ex dolor, tempus id tincidunt non, hendrerit nec odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ut hendrerit dolor. Etiam sapien eros, maximus a est in, euismod interdum ex. Integer sit amet dictum felis. Pellentesque nec sem scelerisque, sollicitudin lorem ac, sagittis mi. Ut vitae leo pulvinar, mollis magna in, facilisis massa. Proin aliquet sit amet enim sed feugiat. Fusce varius, massa sit amet sollicitudin tincidunt, nibh velit venenatis felis, non mattis tellus ex auctor lacus. Nunc sapien erat, tincidunt in metus consequat, pretium molestie nisi. Cras ac metus mollis, dictum metus nec, eleifend ipsum. Nullam eget felis pharetra, laoreet diam a, bibendum lectus.

Duis nec nisi eros. Donec venenatis dictum malesuada. Suspendisse porttitor felis a turpis mollis, posuere rutrum elit commodo. Nam neque dolor, iaculis commodo odio ac, auctor dapibus arcu. Nulla vitae nibh ullamcorper, dignissim ante quis, sodales lectus. Cras lacinia lacinia mauris a feugiat. Aliquam luctus ultricies mauris ut sodales. Vestibulum euismod mollis ipsum, nec hendrerit elit eleifend vel. Donec imperdiet enim purus, finibus aliquam nulla sodales nec. In vel massa et urna rutrum imperdiet ac eget sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi tristique mattis tincidunt. Ut faucibus scelerisque pellentesque. Fusce vehicula nisl iaculis lacus vehicula, ut pellentesque risus rutrum. Ut sollicitudin dui gravida eros consequat faucibus. Pellentesque faucibus, dui a pretium consequat, turpis augue molestie felis, et auctor velit mi vel est.</span>}</p>
        </div>
    </div>
  )
}

export default DescriptionComponent