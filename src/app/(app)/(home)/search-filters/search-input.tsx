import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"

type SearchInputProps = {
    disabled?: boolean
}

export const SearchInput = ({disabled}: SearchInputProps) => {
    return(
        <div className="flex items-center gap-2 w-full">
            <div className="relative w-full flex items-center">
            <SearchIcon className="absolute left-2" size={18}/>
            <Input className="pl-8" placeholder="Search products" disabled={disabled} />
            </div>

            {/* {TODO: Add categories view all button} */}
            {/* {TODO: Add library button} */}
        </div>
    )
}