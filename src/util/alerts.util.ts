export enum Alerts {
    ALERT_VOID_EMAIL = "Campo de email está vazio",
    ALERT_FORMAT_EMAIL = "Formatação de email inválida.\nSiga o padrão: exemplo@exemplo.com ou exemplo.dois@exemplo.com",
    ALERT_VOID_PHONE_NUMBER = "Campo do número de telefone está vazio",
    ALERT_FORMAT_PHONE_NUMBER = "Formatação de número inválido,\nSiga os padrões: (XX)9XXXX-XXXX ou (XX)9XXXXXXXX ",
    ALERT_VOID_NAME = "Campo de nome está vazio",
    ALERT_FORMAT_NAME = "Tamanho do nome menor do que 3 caracteres",
    ALERT_VOID_INPUTS = "Todos os campos estão vazios",
    ALERT_GET_ALL_ERROR = "Contato não encontrado, possível erro de comunicação com o servidor",
    ALERT_GET_ERROR = "Contato não encontrado, possível erro de comunicação com o servidor",
    ALERT_POST_SUCESS = "Contato adicionado",
    ALERT_POST_ERROR = "Não foi possivel adicionar o contato, possível erro na comunicação com o servidor",
    ALERT_DELETE_SUCESS = "Contato deletado",
    ALERT_DELETE_ERROR = "Não foi possível deletar o contato, possível erro na comunicação com o servidor",
    ALERT_EDIT_SUCESS = "Contato editado com sucesso",
    ALERT_EDIT_ERROR = "Não foi possível editar o contato, possível erro na comunicação com o servidor"
}