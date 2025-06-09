namespace ProductManagementWebApi.Models.Interface
{
    public interface ITokenService
    {
        public Task<GenerateTokenResponse> GenerateTokenAsync(GenerateTokenRequest request);

    }
}
