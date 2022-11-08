function IPData({data}) {

    return(
        <div className="h-full md:h-[128px] -bottom-1/2 md:-bottom-16 w-5/6 md:w-4/5 md:min-w-[760px] lg:max-w-[1200px] bg-slate-50 absolute z-[1000] py-1 md:py-6 shadow-2xl rounded-lg grid-cols-1 grid md:grid-cols-4 md:divide-x-[2px]">
            <div className="text-center md:text-left px-6 py-2 md:py-0">
                <p className="tracking-wider uppercase text-slate-500 text-[10px] md:text-xs font-medium md:mb-2">Ip address</p>
                <p className="font-medium text-lg md:text-2xl break-all">{data.ip}</p>
            </div>
            <div className="text-center md:text-left px-6 py-2 md:py-0">
                <p className="tracking-wider uppercase text-slate-500 text-[10px] md:text-xs font-medium md:mb-2">Location</p>
                <p className="font-medium text-lg md:text-2xl">{data.location.city}, {data.location.country}</p>
            </div>
            <div className="text-center md:text-left px-6 py-2 md:py-0">
                <p className="tracking-wider uppercase text-slate-500 text-[10px] md:text-xs font-medium md:mb-2">Timezone</p>
                <p className="font-medium text-lg md:text-2xl">UTC {data.location.timezone}</p>
            </div>
            <div className="tracking-wider text-center md:text-left px-6 py-2 md:py-0">
                <p className="uppercase text-slate-500 text-[10px] md:text-xs font-medium md:mb-2">Isp</p>
                <p className="font-medium text-lg md:text-2xl two-line-truncate">{data.isp}</p>
            </div>
        </div>
    )

}export default IPData
