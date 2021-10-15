import React, {useState} from 'react'
import Affairs from './Affairs'
import AlternativeAffairs from "./AlternativeAffairs";

// types
export type AffairPriorityType = 'high' | 'middle' | 'low' // need to fix any

export type AlternativeAffairsPriorityType = 'top' | 'normal' | 'not bad'

export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType | AlternativeAffairsPriorityType
} // need to fix any

export type FilterType = 'all' | AffairPriorityType | AlternativeAffairsPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]


const defaultAlternativeAffairs: Array<AffairType> = [
    { _id: 1, name: 'Dororo' , priority: 'top'},
    { _id: 2, name: 'Naruto' , priority: 'top'},
    { _id: 3, name: 'Pokemon' , priority: 'normal'},
    { _id: 4, name: 'Death Note' , priority: 'normal'},
    { _id: 5, name: 'One Punchman' , priority: 'not bad'},

]

// pure helper functions for affairs
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    if (filter === 'all') return affairs

    else if ( filter === 'low' ) {
        return affairs.filter( (a) => a.priority === 'low' )
    }
    else if ( filter === 'middle' ) {
        return affairs.filter( (a) => a.priority === 'middle' )
    }
    else if ( filter === 'high' ) {
        return affairs.filter( (a) => a.priority === 'high' )
    }
    return affairs

}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    return (
        affairs.filter( (a) => a._id !==  _id)
    )// need to fix
}

//pure helper functions for alternative affairs


export const alternativeFilterAffairs = (alternativeAffairs: Array<AffairType>, alternativeFilter: FilterType): Array<AffairType> => {
    if (alternativeFilter === 'all') return alternativeAffairs

    else if ( alternativeFilter === 'top' ) {
        return alternativeAffairs.filter( (a) => a.priority === 'top' )
    }
    else if ( alternativeFilter === 'normal' ) {

        return alternativeAffairs.filter( (a) => a.priority === 'normal' )
    }
    else if ( alternativeFilter === 'not bad' ) {
        return alternativeAffairs.filter( (a) => a.priority === 'not bad' )
    }
    return alternativeAffairs
}

export const deleteAlternativeAffair = (alternativeAffairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    return (
        alternativeAffairs.filter( (a) => a._id !==  _id)
    )// need to fix
}




function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')
    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    // Alternative
    const [alternativeAffairs, setAlternativeAffairs] = useState<Array<AffairType>>(defaultAlternativeAffairs)
    const [alternativeFilter, setAlternativeFilter] = useState<FilterType>('all')
    const alternativeFilteredAffairs = alternativeFilterAffairs(alternativeAffairs, alternativeFilter)
    const deleteAlternativeAffairCallback = (_id: number) => setAlternativeAffairs(deleteAlternativeAffair(alternativeAffairs, _id))

    return (
        <div>
            <hr/>
            <h2>homeworks 2</h2>

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeAffairs
                data={alternativeFilteredAffairs}
                setFilter={setAlternativeFilter}
                deleteAffairCallback={deleteAlternativeAffairCallback}
            />
            <hr/>
        </div>
    )
}

export default HW2
