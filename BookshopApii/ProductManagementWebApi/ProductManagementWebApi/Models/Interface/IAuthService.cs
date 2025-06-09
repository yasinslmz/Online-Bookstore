namespace ProductManagementWebApi.Models.Interface
{
    public interface IAuthService
    {
        public Task<UserLoginResponse> LoginUserAsync(UserLoginRequest request);
        


    }
}
