import HeaderContactBook from "@/components/headerContactBook.vue";
import ShowContacts from "@/components/showContacts.vue";
import type { App } from "vue";

export function setComponent(app: App) {
    app.component('header-contact-book', HeaderContactBook),
    app.component('show-contacts', ShowContacts)
}