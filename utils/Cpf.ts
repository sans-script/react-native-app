export default class Cpf {
    static format(cpf: string): string {
        if (cpf.length > 14) return cpf.substring(0, 14)
        return cpf
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    }

    static unformat(cpf: string): string {
        return cpf.replace(/\D/g, '')
    }
}