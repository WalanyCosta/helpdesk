import { ServerError } from '../error/server-error'
import { CloudLogoutAccount } from '../protocols/cloud-logout-account'
import { LogoutAccount } from '../protocols/logout-account'

export class RemoteLogoutAccount implements LogoutAccount {
  constructor (private readonly cloudLogoutAccount: CloudLogoutAccount) {}
  async logout (): Promise<void> {
    const response = await this.cloudLogoutAccount.logout()
    if (response?.code) throw new ServerError()
  }
}
