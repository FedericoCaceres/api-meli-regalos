import { GIFT_ACCEPCTED_OR_REJECTED } from '../constants'

export const giftAccepted = (ctx, gift) => {
  ctx.pubsub.publish(GIFT_ACCEPCTED_OR_REJECTED, {
    giftAcceptedOrRejected: {
      title: `${gift.receiverName} aceptó tu regalo!`,
      body: 'esto seria un body',
      footer: 'este seria el footer',
      icon: 'ww.logo.con',
      userId: gift.userSenderId
    }
  })
}
