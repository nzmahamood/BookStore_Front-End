import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
    { name: 'Wade Cooper' },
    { name: 'Arlene Mccoy' },
    { name: 'Devon Webb' },
    { name: 'Tom Cook' },
    { name: 'Tanya Fox' },
    { name: 'Hellen Schmidt' },
  ]
const sortBy = [
    {key: 'pop', value: 'Most Popular'},
    {key: 'rel', value: 'Relevance'},
    {key: 'name', value: 'Name'},
    {key: 'asc', value: 'Price Asc'},
    {key: 'desc', value: 'Price Desc'},
    {key: 'latest', value: 'Latest'},
]
const ListBox = ({type, data}) => {
    const options = type === 'Sort By' ? sortBy : data||[];
    const [selected, setSelected] = useState(options?.[0])

    return (
        <div className=" w-full">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative">
            <Listbox.Button className="relative flex items-center justify-center w-full cursor-default py-3 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <div className='flex md:gap-3 md:items-center md:justify-center'>
                <span className='md:flex font-inter font-semibold text-xs lg:text-[16px] text-slate-900'>{type === "Sort By" ? "Sort": type} <span className='hidden md:block px-1'>|</span></span><span className="hidden md:block truncate font-inter font-regular text-xs">{type === "Sort By" ? selected.value : selected?.categories}</span>

                </div>
                
              
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="z-50 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {options.map((option, optionId) => (
                  <Listbox.Option
                    key={optionId}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                      }`
                    }
                    value={option}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {type === "Sort By" ? option.value : option?.categories}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    )
}

export default ListBox