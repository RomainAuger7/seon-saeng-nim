import Homepage from "@/pages/Homepage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import ContactPage from "@/pages/ContactPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";

export const routes = [
  {path:"/", component : Homepage, name : "HomePage"},
  {path:"/about", component : AboutPage, name : "AboutPage"},
  {path:"/contact", component : ContactPage, name : "ContactPage"},
  {path: '/:pathMatch(.*)*', component:NotFoundPage},
]
