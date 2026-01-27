export interface SubscribeResponse {
  success: boolean;
  message: string;
}

export const subscribeEmail = async (
  email: string,
): Promise<SubscribeResponse> => {
  const LAMBDA_URL = process.env.NEXT_PUBLIC_AWS_LAMBDA_URL;

  try {
    const response = await fetch(LAMBDA_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || '알림 신청 실패.');
    }

    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
