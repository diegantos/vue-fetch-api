import { defineStore } from 'pinia'

const API = 'https://api.github.com/users/'

export const useSearchStore = defineStore('search', {
  state: () => ({
    search: '',
    result: '',
    error:  '',
    favorites: new Map()
  }),
  getters: {
    isFavorite(){
      return this.favorites.has(this.result.id)
    },
    allFavorites(){
      return Array.from(this.favorites.values())
    }
  },
  actions: {
    async doSearch(){
      this.result = this.error = ''
      try {
        const response = await fetch( API + this.search)
        const data = await response.json()
        if( data.bio === null ) throw new Error ('User not found')
        if( this.search === '' || this.search === ' ' ) throw new Error ('You must introduce a user')
        console.log(data)
  
        this.result = data
      } catch (error) {
        this.error = error
      } finally{
        this.search = ''
      }
    },
    addFavorite(){
      this.favorites.set(this.result.id, this.result)
      this.updateStorage()
    },
    removeFavorite(){
      this.favorites.delete(this.result.id)
      this.updateStorage()
    },
    updateStorage(){
      window.localStorage.setItem('favorites', JSON.stringify(this.allFavorites))
    },
    // created(){
    //   const savedFavorites = JSON.parse(window.localStorage.getItem('favourites'))
    //   if(savedFavorites.length){
    //     const favorites = new Map(savedFavorites.map(favorite => [favorite.id, favorite]))
    //     this.favorites = favorites
    //   }
    // }
  }
})
